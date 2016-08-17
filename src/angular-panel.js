runInInspected(() => {
  return angular.version
}).then((versions) => {
  console.log(versions);
});
