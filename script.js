const nameInput = document.querySelector('.name-input');
const choiceInput = document.querySelector('.choice-input');
const authorInput = document.querySelector('.author-input');
const yearInput = document.querySelector('.year-input')
const subBtn = document.querySelector('.subBtn');

subBtn.addEventListener('click', (index) => {
    const nameVal = nameInput.value;
    const choiceVal = choiceInput.value;
    const authorVal = authorInput.value;
    const yearVal = yearInput.value;
    const formAlert= document.querySelector('.formAlert');
    if (nameVal == '') {
        // alert('Please Enter the your name!!');
        formAlert.style.display = 'block';
        formAlert.innerText=`Please Enter the your name!!`
        setTimeout(function () {
            formAlert.style.display = 'none';
        }, 1000);
    }
    else if (choiceVal == 'Choose...') {
        // alert('Please Enter the choice value!!');
        formAlert.style.display = 'block';
        formAlert.innerText=`Please Enter the choice value!!`
        setTimeout(function () {
            formAlert.style.display = 'none';
        }, 1000);
    }
    else if (authorVal == '') {
        // alert('Please Enter the author value!!');
        formAlert.style.display = 'block';
        formAlert.innerText=`Please Enter the author value!!`
        setTimeout(function () {
            formAlert.style.display = 'none';
        }, 1000);
    }
    else if (yearVal == '') {
        // alert('Please Enter the publishing year!!');
        formAlert.style.display = 'block';
        formAlert.innerText=`Please Enter the publishing year!!`
        setTimeout(function () {
            formAlert.style.display = 'none';
        }, 1000);
    }
    else {
        let cardContainer = document.querySelector('.cardContainer');
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        const lastUpdated= document.lastModified;


        cardDiv.innerHTML = `
            <div class="card-body">
                <p><span class="title font-weight-bold">Your Name: </span>${nameVal}</p>
                <p><span class="title font-weight-bold">Course Name: </span>${choiceVal}</p>
                <p><span class="title font-weight-bold">Author Name: </span>${authorVal}</p>
                <p><span class="title font-weight-bold">Publishing Year: </span>${yearVal}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">${lastUpdated}</small>
            </div>
            <button type="button" class="deleting btn btn-danger" style="background-color: maroon;">Delete</button>`;
        index++;
        cardContainer.appendChild(cardDiv);

        deleteFunction();

        nameInput.value = '';
        choiceInput.value = '';
        authorInput.value = '';
        yearInput.value = '';
    }
});


function deleteFunction() {
    let deleteBtn = document.querySelectorAll('.deleting');
    const alertCard = document.querySelector('.alertCard ');
    deleteBtn.forEach(function (btn) {
        btn.addEventListener('click', function () {
            btn.parentElement.remove();
            alertCard.style.display = 'block';
            setTimeout(function () {
                alertCard.style.display = 'none';
            }, 1000);
        });
    });
}




