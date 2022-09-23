const Router = ({data}) => {
    return (<div>
        <Menu/>
        <Switch>
        <PrivateRoute path="/media/new" component={NewMedia}/>
      </Switch>
    </div>)
}

export default Router