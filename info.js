let info = `
<h1>Fly Program</h1>
A customizable evolutionary algorithm to get flies to food


<h3> The Goal:</h3>
The goal of this program is to breed a fly(black) that can get to the 'food'(blue) without touching the walls(red) or the 
edges(edges) by using an Evolutionary Algorithim
<h3> Controls:</h3>
<h5> Reward:</h5>
The amount that is multiplied to the fly's score when it touches the food.
<h5> Punishment:
The amount that the fly's is divided by when they hit the wall or edges.
<h5> Speed:</h5>
How fast the flies go, slower is usually better.
<h5> Population Size:</h5>
How many flies there are.
<b>NOTE:</b> the more flies there are the laggier it gets.
<h5> Life Span:</h5>
How long the generation lasts.
<h5> Mutation Rate:</h5>
How often a fly will Mutate.
<h5> Run Experiment:</h5>
Run the experiment with the current settings.
<h5> Reset Controls:</h5>
Resets the values of the controls.
<h5> Code:</h5>
Go to the github repository for this project.
<h5> Repl.it:</h5>
See the Repl.it project.

<i>Note that the way an Evolutionary Algorithim functions is not a good parenting technique.</i>

<h3> How It Works</h3>
![The Way That Breeding Works](https://fly-program--alextheperson.repl.co/EA%20Flow.png)
The evolutionary algorithim starts by creating [insert population size here] flies and then, every frame it points them in a 
random direction and pushes them. The amount that they get pushed depends on the speed setting. After they get pushed it 
checks to see if any of them hit any thing if they did it changes their score acordingly. Once the life time off that generation 
is over, it evaluates them. The way that it evaluates them is by seeing how high their scores are at the end. It then starts 
creating the next generation it does this by selecting two random flies(although the higher the score of the fly is the more 
likely it is to be picked and the two parents can be the same fly). and then goes through a list of all of their actions and 
chooses a random one.
![The Way That Breeding Works](https://fly-program--alextheperson.repl.co/EA%20Breeding.png)
Once it has a full population it will then do the same thing again.

`