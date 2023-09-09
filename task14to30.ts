// -----------Exercise 14------------------

  //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

  const guestList:string[]=["Abdullah","Ali","Abdul Rehman","Umar"]
  guestList.forEach((i)=>console.log(`Im Inviting you for Dinner! ${i}.`)
  )


// -----------Exercise 14------------------

  //Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

  const notCome:string="Ali";
console.log("Not Make it",notCome);
guestList.splice(1,1,"Numan")
// new list 
guestList.forEach((i)=>console.log(`Im Inviting you for Dinner! ${i}.`)
)
