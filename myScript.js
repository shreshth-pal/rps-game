'use strict';
// Creating a function named computerPlay which returns a random number from 1-3
// IF its 1:rock 2:paper 3:scissors
// to make our input case insesntive two ways convert to lowercase/uppercase or regex here using regex
// A function named userinput to provide our input in desired format
// Creating a function result to rock beats scissors
function turn(user,comp)
{
    if( (user==='Rock' && comp ==='Scissors') || (user ==='Scissors' && comp ==='Paper') || (user==='Paper' && comp ==='Rock'))
       {
            console.log(`You Win! ${user} beats ${comp}`);
            return 1;
       }       
    else if( (comp==='Rock' && user ==='Scissors') || (comp ==='Scissors' && user ==='Paper') || (comp==='Paper' && user ==='Rock'))
       {
            console.log(`You Lose! ${comp} beats ${user}`);
             return -1;   
      } 
    console.log(`You Lose! ${comp} beats ${user}`);  
    return 0;
}
function computerPlay()
{
        let choice= Math.floor(Math.random()*3)+1;
        if(choice==1)
            return 'Rock';
        else if(choice==2)
            return 'Paper';
        else
            return 'Scissors';
}
function userI()
{
    while(true)
    {
        let ch =prompt('Enter your choice \nRock\nPaper\nScissors');
        if(/rock/i.test(ch))
            return 'Rock';
        else if(/scissors/i.test(ch))
            return 'Scissors';
        else if(/paper/i.test(ch))
            return 'Paper';
        else
            console.log('Wrong Input');
    }
}
function game()
{  
   let x=0,y=0; 
    for(let i=0;i<5;i++)
    {
        let compChoice=computerPlay();
        let userChoice=userI();
        let res=turn(userChoice,compChoice);
        if(res===1)
            x++;
        else if(res===-1)
            y++;
        else
            x++,y++;
    }
    if(x==y)
        console.log('It was a tie');
    else if(x>y)
        console.log('Congratulations! You Win.');
    else
        console.log('Better Luck Next Time');
    
}

game();