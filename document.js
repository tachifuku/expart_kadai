

function alertbutton(){
    const cm = document.getElementById('cm').value;
    let meter = 0
    kg = 0
    meter = cm/100
    kg = meter*meter*22    
    alert("あなたの適正体重は"+kg+"kgです")
}
