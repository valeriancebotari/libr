let $menuTrigger = document.getElementById('menuTrigger');
let $mainMenu = document.getElementById('mainMenu');

//console.log($MainMenu);

$menuTrigger.addEventListener('click', () => {
    $mainMenu.classList.toggle('Active');
}, true);

/*document.addEventListener('mouseup', function(e) {

    if (!$mainMenu.contains(e.target) && $mainMenu.contains('Open') ) {
        $mainMenu.classList.remove('Open');
    }
 });*/
 