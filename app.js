

//Show/hide divs

    
    function showHTMLDiv1(divId, element)
    {
        document.getElementById(divId).style.display = element.value == "Yes recommendation made by practioner" ? 'block' : 'none';
       
    }
    function showHTMLDiv2(divId, element)
    {
        document.getElementById(divId).style.display = element.value == "have_been-diagnosed_within_2_years" ? 'block' : 'none';
    }
    function showHTMLDiv3(divId, element)
    {
        document.getElementById(divId).style.display = element.value == "unable_to_perform_normal_activities" ? 'block' : 'none';
    }
    function showHTMLDiv4(divId, element)
    {
        document.getElementById(divId).style.display = element.value == "been_admitted_to_hospital" ? 'block' : 'none';
    }
    function showHTMLDiv5(divId, element)
    {
        document.getElementById(divId).style.display = element.value == "Yes" ? 'block' : 'none';
    }
    
    function addFields(){
        // Generate a dynamic number of inputs
        var number = document.getElementById("member").value;
        // Get the element where the inputs will be added to
        var container = document.getElementById("container");
        // Remove every children it had before
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for (i=0;i<number;i++){
            // Append a node with a random text
            container.appendChild(document.createTextNode("Name of Insurance Company " + (i+1)));
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            var input2 = document.createElement("input");
            input.type = "text";
            input.name = "Name_of_insurance_company" + i;
            container.appendChild(input);
            container.appendChild(document.createElement("br"))
            container.appendChild(document.createTextNode("Policy Amount " + (i+1)));
            input2.type = "text"
            input2.name = "Policy Amount" + i;
            
            container.appendChild(input2);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }
    }

