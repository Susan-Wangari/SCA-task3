const delay =(ms) => {
   return newPromise((resolve) => {
    setTimeout(resolve, ms) ;
});
}
delay(3000).then(() =>
alert('runs after 3 seconds'));
