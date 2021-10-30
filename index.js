function newImage(src, position, left, bottom) {
    let image = document.createElement('img')
    image.src = src
    image.style.position = position
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
} 

newImage('assets/green-character.gif', 'fixed', 100, 100)
newImage('assets/pine-tree.png', 'fixed', 450, 200)
newImage('assets/tree.png', 'fixed', 200, 300)
newImage('assets/pillar.png', 'fixed', 350, 100)
newImage('assets/crate.png', 'fixed', 150, 200)
newImage('assets/well.png', 'fixed', 500, 425)

function newItem(src, position, left, bottom){
    let image = newImage(src, position, left, bottom)


image.addEventListener('dblclick', function(){
    image.remove()
})
}
 
newItem('assets/sword.png', 'fixed', 500, 405);
newItem('assets/sheild.png', 'fixed', 165, 185);
newItem('assets/staff.png', 'fixed', 600, 100);

// Bonus
// window height: 1114
// window width: 1613



// Step 1 - 2 code
// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

