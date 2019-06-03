


export const sendMessage =(data) =>(dispatch)=>{
  dispatch({
    type:"SEND_MESSAGE",
    payload: data
  })
}