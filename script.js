let obj = {
  a: document.querySelector(".studentName"),
  b: document.querySelector(".studentFName"),
  c: document.querySelector(".cnicnumber"),
  d: document.getElementById("course"),
  e: document.getElementById("studentPicture")
};

// functionality of Generate button
document.querySelector(".btn").onclick = () => {
  // Clearing the data from the fields
  document.querySelector(".name").innerHTML = "";
  document.querySelector(".rollNo").innerHTML = "";
  document.querySelector(".info").innerHTML = "";
  document.querySelector(".qrcode").innerHTML = "";
  document.getElementById("courses").innerHTML ="";

  // generating student name on the front side
  let frontcardside = document.querySelector(".name");
  let names = document.createElement("h3");
  names.textContent = obj.a.value;
  frontcardside.append(names);

  // adding course Section on the front side
  let crs = document.createElement("p")
crs.innerHTML =`<strong>Course: <u>${obj.d.value}</u></strong>`
document.getElementById("courses").append(crs)

  //non-logical random rollno
  
  if(obj.d.value == "Web and App Development"){

    let fixedLetters = "WMA"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }
  else if(obj.d.value == "Graphic Designing"){
    let fixedLetters = "GD"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }
  else if(obj.d.value == "Python Programming"){
    let fixedLetters = "PP"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }
  else if(obj.d.value == "Cyber Security"){
    let fixedLetters = "CS"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }
  else if(obj.d.value == "IT Essentials"){
    let fixedLetters = "IE"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }
  else{
    let fixedLetters = "NW"; // Fixed letters
    let randomDigits = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
    let randomNumber = fixedLetters + "-" + randomDigits.toString().slice(0, 6); // Concatenate fixed letters with random digits
  
    // Update roll number on the card
    let rollno = document.querySelector(".rollNo");
    rollno.textContent = randomNumber;
  }

  

  // adding student name on the backside of card
  let backsidesection = document.querySelector(".info");
  let sname = document.createElement("p");
  sname.innerHTML = `<strong>Name: <u>${obj.a.value}</u></strong>`;
  backsidesection.append(sname);

  //adding Father name on the backside of card
  let fname = document.createElement("p");
  fname.innerHTML = `<strong>Father name: <u>${obj.b.value}</u></strong>`;
  backsidesection.append(fname);

  //adding student CNIC 
  let nic = document.createElement("p");
  nic.innerHTML = `<strong>CNIC: <u>${obj.c.value}</u></strong>`;
  backsidesection.append(nic);

  // Generate QR code package from CDN
  QrCreator.render({
      text: `${randomNumber}`, // Data to encode into QR code
      radius: 0.5,
      ecLevel: 'H',
      fill: '#000000',
      background: null,
      size: 80
  }, document.querySelector('.qrcode'));

  // Display uploaded image
  renderImage(obj.e.files[0]);
};

// uploading student picture on card from system
function renderImage(file) {
  let picture = document.querySelector(".pic");
  let reader = new FileReader();

  reader.onload = function (e) {
      let img = document.createElement("img");
      img.setAttribute("class","profpic")
      img.src = e.target.result;
      picture.innerHTML = ""; // Clear previous image
      picture.appendChild(img);
  };

  reader.readAsDataURL(file);
}