const clickSubmit = () => {
    let mediaData = new FormData()
    values.title && mediaData.append('title', values.title)
    values.video && mediaData.append('video', values.video)
    values.description && mediaData.append('description', values.description)
    values.genre && mediaData.append('genre', values.genre)
    create({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, mediaData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, error: '', mediaId: data._id, redirect: true})
      }
    })
  }
const handleChange = name => event => {
    const value = name === 'video'
      ? event.target.files[0]
      : event.target.value
    setValues({...values, [name]: value })
  }
if (values.redirect) {
    return (<Redirect to={'/media/' + values.mediaId}/>)
}
<input accept="video/*" onChange={handleChange('video')} className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <Button color="secondary" variant="contained" component="span">
              Upload
              <FileUpload/>
            </Button>
          </label> <span className={classes.filename}>{values.video ? values.video.name : ''}</span><br/>
          <TextField id="title" label="Title" className={classes.textField} value={values.title} onChange={handleChange('title')} margin="normal"/><br/>
          <TextField
            id="multiline-flexible"
            label="Description"
            multiline
            rows="2"
            value={values.description}
            onChange={handleChange('description')}
            className={classes.textField}
            margin="normal"
          /><br/>
          <TextField id="genre" label="Genre" className={classes.textField} value={values.genre} onChange={handleChange('genre')} margin="normal"/><br/>
          <br/>