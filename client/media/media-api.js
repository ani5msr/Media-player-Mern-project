const create = async (params, cred, media) => {
    try {
      let response = await fetch('/api/media/new/'+ params.userId, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + cred.t
      },
      body: media
    })    
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }