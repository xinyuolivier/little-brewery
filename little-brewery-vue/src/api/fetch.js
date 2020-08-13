
export async function fetchReq(url, options) {
  
  const request = new Request(url,options);     
  console.log(request);
  
  return await fetch(request)
    .then((response) => { //then 请求成功之后进行什么操作
      console.log(response);
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
  }

