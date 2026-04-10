async function api(action,data={}){

const res = await fetch(API_URL,{
method:"POST",
body:JSON.stringify({
action,
data
})
})

return await res.json()

}
