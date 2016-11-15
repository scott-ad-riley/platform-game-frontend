Fairly empty for now...

### Setup

* Clone/Download
* `npm i`
* `node server.js` and `webpack -w`

### Notes

* Where to filter/limit the list of times
  * limit could be done in mapStateToProps
  * filtering... not sure
  * try to let react just handle re-sorting
    * if we keep the key consistent, the re-sort can be done in mapStateToProps as well
      * possibly optimized to a find(run => run.time > new_run.time) then just insert before
  * just do everything with firebase ¯\\\_(ツ)\_/¯
* Firebase security?
