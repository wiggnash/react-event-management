export const dataRender = (dataArray) => {
    return dataArray.map((data,index) => {
        return (<option key={index} value={data}>{data}</option>);
    })
  }

  export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

export const years = [2023,2024];