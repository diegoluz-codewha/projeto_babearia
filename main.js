// Simulando agendamentos existentes
const existingAppointments = [
    { id: 1, barber: 'Carlos', date: '2024-10-30', time: '10:00' },
    { id: 2, barber: 'João', date: '2024-10-31', time: '14:00' },
];

  // Populando o seletor de agendamentos existentes
const existingAppointmentsSelect = document.getElementById('existing-appointments');
existingAppointments.forEach(appointment => {
    const option = document.createElement('option');
    option.value = appointment.id;
    option.textContent = `Barbeiro: ${appointment.barber}, Data: ${appointment.date}, Horário: ${appointment.time}`;
    existingAppointmentsSelect.appendChild(option);
});

  // Habilita o botão "Carregar Detalhes" quando um agendamento é escolhido
existingAppointmentsSelect.addEventListener('change', function() {
    const loadAppointmentBtn = document.getElementById('load-appointment-btn');
    loadAppointmentBtn.classList.toggle('hidden', this.value === 'none');
});

  // Carrega os detalhes do agendamento existente
document.getElementById('load-appointment-btn').addEventListener('click', function() {
    const selectedId = existingAppointmentsSelect.value;
    const appointment = existingAppointments.find(app => app.id == selectedId);

    if (appointment) {
        document.getElementById('appointment-details').textContent = `Barbeiro: ${appointment.barber}, Data: ${appointment.date}, Horário: ${appointment.time}`;
        document.getElementById('loaded-appointment').classList.remove('hidden');
    }
});

  // Lógica para verificar disponibilidade de horários
document.getElementById('check-availability-btn').addEventListener('click', function() {
    const barber = document.getElementById('barber').value;
    const date = document.getElementById('date').value;

    // Simulando a verificação de horários disponíveis
    const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00']; // Exemplo de horários

    // Limpa o seletor de horários
    const availableTimesSelect = document.getElementById('available-times-select');
    availableTimesSelect.innerHTML = '<option value="none">Selecione um horário</option>'; // Limpa opções anteriores

    // Verifica se o barbeiro e a data estão selecionados
    if (barber !== 'none' && date) {
        // Preenche o seletor de horários
        availableTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            availableTimesSelect.appendChild(option);
        });

        // Mostra a tabela de horários disponíveis
        document.getElementById('availability-table').classList.remove('hidden');
    } else {
        alert('Por favor, selecione um barbeiro e uma data.');
    }
});

  // Habilita o botão "Selecionar Horário" quando um horário é escolhido
document.getElementById('available-times-select').addEventListener('change', function() {
    const selectTimeBtn = document.getElementById('select-time-btn');
    selectTimeBtn.classList.toggle('hidden', this.value === 'none');
});

  // Lógica para o botão "Selecionar Horário"
document.getElementById('select-time-btn').addEventListener('click', function() {
    const selectedTime = document.getElementById('available-times-select').value;

    if (selectedTime !== 'none') {
        document.getElementById('schedule-section').classList.remove('hidden');
        document.getElementById('availability-message').textContent = `Horário ${selectedTime} selecionado.`;
    }
});

  // Lógica para agendar
document.getElementById('schedule-btn').addEventListener('click', function() {
    const barber = document.getElementById('barber').value;
    const date = document.getElementById('date').value;
    const selectedTime = document.getElementById('available-times-select').value;

    if (barber !== 'none' && date && selectedTime !== 'none') {
        const confirmationMessage = `Agendamento confirmado com ${barber} no dia ${date} às ${selectedTime}.`;
        document.getElementById('schedule-confirmation').textContent = confirmationMessage;
        
        // Pergunta se deseja voltar para o site
        const shouldReturn = confirm(`${confirmationMessage}\nDeseja voltar para o site?`);
        if (shouldReturn) {
            window.location.reload(); // Atualiza a página para voltar ao estado inicial
        }
    } else {
        alert('Por favor, selecione todas as informações necessárias para agendar.');
    }
});

 // Redireciona para a página index.html
document.getElementById('confirm-return').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redireciona para index.html
});
  // Lógica para o botão "Reagendar"
document.getElementById('reschedule-btn').addEventListener('click', function() {
    const selectedId = existingAppointmentsSelect.value;
    const appointment = existingAppointments.find(app => app.id == selectedId);

    if (appointment) {
        const confirmationMessage = `Reagendamento confirmado com ${appointment.barber} para uma nova data e horário.`;
        document.getElementById('schedule-confirmation').textContent = confirmationMessage;

        // Pergunta se deseja voltar para o site
        const shouldReturn = confirm(`${confirmationMessage}\nDeseja voltar para o site?`);
        if (shouldReturn) {
            window.location.reload(); // Atualiza a página para voltar ao estado inicial
        }
        
        document.getElementById('schedule-section').classList.remove('hidden');
        
        // Opcional: limpar a seleção anterior
        document.getElementById('available-times-select').innerHTML = '<option value="none">Selecione um horário</option>';
    }
});
