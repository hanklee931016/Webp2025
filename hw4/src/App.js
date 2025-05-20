import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Container, Typography } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: '標題', flex: 1 },
  { field: 'location', headerName: '地點', flex: 1 },
  { field: 'price', headerName: '票價', flex: 1 },
];

function App() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch(
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
    )
      .then((res) => res.json())
      .then((json) => {
        const processed = json.map((item, index) => ({
          id: index + 1,
          title: item.title,
          location: item.showInfo?.[0]?.location || 'N/A',
          price: item.showInfo?.[0]?.price || 'N/A',
        }));
        setData(processed);
        setDisplayData(processed);
      });
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearchText(keyword);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(keyword)
    );
    setDisplayData(filtered);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 30 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>
      <TextField
        label="搜尋名稱"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 20 }}
      />
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={displayData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </Container>
  );
}

export default App;
