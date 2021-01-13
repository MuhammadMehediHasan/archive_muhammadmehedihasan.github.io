function hideText(str = "") {
  let matched = str.match(/\|\|.+?\|\|/gi);
  let formate = [];
  var final = str;
  matched.forEach((e) => {
    formate.push(
      e.replace("||", '<span class="show box">').replace("||", "</span>")
    );
  });

    // console.log(formate)
    // console.log(matched)

    matched.map((value,index) => {
        final = final.replace(value, formate[index]);
        console.log(formate[index])
    })
    console.log(final)
 
}

hideText(`

This is a test. And i want to hide || this ||.
My Username is: Demo and password is: ||I got you||

`)