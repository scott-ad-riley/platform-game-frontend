export default (run) => {
  const { name, time } = run.val()
  const { key } = run
  return {
    type: 'NEW_RUN',
    run: {name, time, key}
  }
}
