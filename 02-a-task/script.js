document.addEventListener("DOMContentLoaded", function () {
    const cityGroup = {
        Moscow: ["Цех 1", "Цех 2"],
        Perm: ["Цех 3", "Цех 4"],
        Kazan: ["Цех 5", "Цех 6"],
    };

    const workshopСoworkerGroup = {
        "Цех 1": ["Сотрудник 1", "Сотрудник 2"],
        "Цех 2": ["Сотрудник 3", "Сотрудник 4"],
        "Цех 3": ["Сотрудник 5", "Сотрудник 6"],
        "Цех 4": ["Сотрудник 7", "Сотрудник 8"],
        "Цех 5": ["Сотрудник 9", "Сотрудник 10"],
        "Цех 6": ["Сотрудник 11", "Сотрудник 12"],
    };

    const form = document.querySelector("#productionForm");
    const citySelect = document.querySelector("#city"); //город
    const workshopSelect = document.querySelector("#workshop"); //цех
    const coworkerSelect = document.querySelector("#coworker"); //сотрудник

    //выбор города
    citySelect.addEventListener('change', function () {
        const selectedCity = citySelect.value;
        updateWorkshopOptions(selectedCity);
    });
//выбор цеха
    workshopSelect.addEventListener('change', function () { const selectedWorkshop = workshopSelect.value;
        updateCoworkerOptions(selectedWorkshop)
    });

    function updateWorkshopOptions(city) {
        workshopSelect.innerHTML = `<option value="">Выберите цех</option>`;
        if(city && cityGroup[city]) {
            cityGroup[city].forEach(workshop => {
                const option = document.createElement('option');
                option.value = workshop;
                option.textContent = workshop;
                workshopSelect.appendChild(option)
            });
        }
        coworkerSelect.innerHTML = `<option value="">Выберите сотрудника</option>`
    }

    function updateCoworkerOptions(workshop) {
        coworkerSelect.innerHTML = `<option value="">Выберите сотрудника</option>`;
        if(workshop && workshopСoworkerGroup[workshop]) {
            workshopСoworkerGroup[workshop].forEach(coworker => {
                const option = document.createElement('option');
                option.value = coworker;
                option.textContent = coworker;
                coworkerSelect.appendChild(option)
            });
        }
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const selectedValues = {
            city: citySelect.value,
            workshop: workshopSelect.value,
            coworker: coworkerSelect.value,
            brigade: document.querySelector('#brigade').value,
            shift: document.querySelector('#shift').value
        };
        document.cookie = `formValues=${JSON.stringify(selectedValues)}; path=/`;
        alert('Данные сохранены в Cookie');
    })
});
