
/* custom block */

(function(){
    var tabItems = document.querySelectorAll('.code__button');
    var tabItemsArray = Array.prototype.slice.call(tabItems, 0);
    var activeItem = document.querySelector('.code__button--active');
    var activeIndex = 0;
    var codeList = document.querySelectorAll('.code__script');
    var codeActive = document.querySelector('.code__script--active');
    var activeMobileCodeSection = document.querySelector('.code-mobile--active');
    var mobileCodeList = document.querySelectorAll('.code-mobile');

    function toggleActiveElement() {
        activeItem.classList.remove('code__button--active');
        this.classList.add('code__button--active');
        activeItem = this
        activeIndex = tabItemsArray.indexOf(activeItem)
        toggleActiveCodeItem(activeIndex)
    }

    function toggleActiveCodeItem( index ) {

        codeActive.classList.remove('code__script--active')
        codeActive = codeList[index]
        codeActive.classList.add('code__script--active')

        activeMobileCodeSection.classList.remove('code-mobile--active')
        activeMobileCodeSection = mobileCodeList[index]
        activeMobileCodeSection.classList.add('code-mobile--active')
    }

    tabItemsArray.forEach( function (elem) {
        elem.addEventListener('click', toggleActiveElement)
    })
})()

/* custom block end*/
