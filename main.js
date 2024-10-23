document.addEventListener("DOMContentLoaded", function() {
    // ================== LOGIN E AGENDA ==================
    const loginBtn = document.getElementById("login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("login-error");
    const agendaSection = document.querySelector(".agenda-section");
    const checkAvailabilityBtn = document.getElementById("check-availability-btn");
    const barberSelect = document.getElementById("barber");
    const dateInput = document.getElementById("date");
    const availabilityTable = document.getElementById("availability-table");
    const availableTimesTbody = document.getElementById("available-times");
    const scheduleSection = document.getElementById("schedule-section");
    const scheduleBtn = document.getElementById("schedule-btn");
    const scheduleConfirmation = document.getElementById("schedule-confirmation");

    // Simulação de horários disponíveis dos barbeiros
    const availability = {
        barber1: { // Carlos
            "2024-10-01": ["10:00", "11:00", "15:00"],
            "2024-10-02": ["09:00", "14:00"]
        },
        barber2: { // João
            "2024-10-01": ["09:00", "13:00", "16:00"],
            "2024-10-02": ["10:00", "11:00", "14:00"]
        },
        barber3: { // Pedro
            "2024-10-01": ["12:00", "13:00", "17:00"],
            "2024-10-02": ["09:00", "12:00", "16:00"]
        }
    };

    // Função para verificar a disponibilidade do barbeiro
    checkAvailabilityBtn.addEventListener("click", function() {
        const selectedBarber = barberSelect.value;
        const selectedDate = dateInput.value;

        if (selectedBarber === "none" || !selectedDate) {
            alert("Por favor, selecione um barbeiro e uma data.");
            return;
        }

        const availableTimes = availability[selectedBarber][selectedDate];
        availableTimesTbody.innerHTML = "";

        if (availableTimes && availableTimes.length > 0) {
            availabilityTable.classList.remove("hidden");

            availableTimes.forEach(time => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${time}</td><td>Disponível</td>`;
                availableTimesTbody.appendChild(row);
            });

            scheduleSection.classList.remove("hidden");
        } else {
            availabilityTable.classList.add("hidden");
            scheduleSection.classList.add("hidden");
            alert("Não há horários disponíveis para esta data.");
        }
    });

    // Simulação de agendamento
    scheduleBtn.addEventListener("click", function() {
        const selectedBarber = barberSelect.options[barberSelect.selectedIndex].text;
        const selectedDate = dateInput.value;

        scheduleConfirmation.textContent = `Agendamento confirmado com ${selectedBarber} para ${selectedDate}.`;
    });

});
