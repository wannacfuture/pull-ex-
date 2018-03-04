const fetchGists = async () => {
  try {
    const response = await fetch('https://api.github.com/users/jahe/gists')
    const gists = await response.json()
    const names = gists.map(gist => gist.description)
    return names.join(', ')
  } catch (e) {
    console.log(e)
  }
}

export { fetchGists }
