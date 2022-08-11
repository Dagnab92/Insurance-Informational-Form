

//Show/hide divs

    
    function showHTMLDiv(divId, element)
    {
        document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
    }