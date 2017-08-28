export const success = (res, status) => (entity) => {
  if (entity) {
    console.log(entity);
    console.log("================+++++++++++++");
    res.status(status || 200).json(entity)
  }
  return null
}

export const notFound = (res) => (entity) => {
  if (entity) {
    return entity
  }
  res.status(404).end()
  return null
}