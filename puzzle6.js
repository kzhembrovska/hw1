right();

if(getColor()=="red"){
  for (var s=0; s<3; s++){
    up();}
  if(getColor()=="red"){
    up();
    left();}
  else{ 
    right();
    up();}}
  else{
    for (var s=0; s<3; s++){
      down();}
    if(getColor()=="red"){
      left();
      down();}
    else{
      right();
      down();}}
up();
