// Temtseen

// 1. Хоёр багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )

let teamA1 = 96,
  teamA2 = 108,
  teamA3 = 89;
averageAteam = (teamA1 + teamA2 + teamA3) / 3;

let teamB1 = 88,
  teamB2 = 91,
  teamB3 = 110;
averageBteam = (teamB1 + teamB2 + teamB3) / 3;

console.log("A bagiin dundaj onoo bol " + averageAteam);
console.log("B bagiin dundaj onoo bol " + averageBteam);

// 2. Багийн дундаж нөгөө багийхаас их бол тэр баг түрүүлсэн гэж хэвлэнэ үү. Багуудын оноо тэнцсэн тохиолдолд багууд тэнцсэн гэж хэвлэнэ үү. 

if (averageAteam > averageBteam) {
  console.log("A team-iin onoo " + averageAteam + " ih uchraas turuulsen.");
} else if (averageAteam < averageBteam) {
  console.log("B team-iin onoo " + averageBteam + " ih uchraas turuulsen.");
} else if ((averageAteam = averageBteam)) {
  console.log("A team B team-iin dundaj onoonuud tentsuu baina.");
} 

// Энэ дүрэм нь зөвхөн багийн дундаж 100 аас багагүй тохиолдолд энэхүү дүрэм хэрэгжэхийг анхаарна уу. Хэрвээ 2 баг 2 уулаа 100 аас бага тохиолдолд ялагч байхгүй. Тус бүрийн нөхцөлийг оноог өөрчилж туршиж үзээрэй.

if (averageAteam >= 100 && averageBteam >= 100) {
  if (averageAteam > averageBteam) {
    console.log("A team-iin onoo " + averageAteam + " ih uchraas turuulsen.");
  } else if (averageAteam < averageBteam) {
    console.log("B team-iin onoo " + averageBteam + " ih uchraas turuulsen.");
  } else if ((averageAteam = averageBteam)) {
    console.log("A team B team-iin dundaj onoonuud tentsuu baina.");
  } 
} else {
  console.log("yalagch baihgui hha");
}