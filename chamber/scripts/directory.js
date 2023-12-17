async function fetchAndDisplayMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    const membersContainer = document.getElementById('membersContainer');
    const viewSelector = document.querySelector('.view-toggle input[name="view"]:checked').value;

    membersContainer.innerHTML = '';

    data.members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        if (viewSelector === 'grid') {
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.website}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
        } else if (viewSelector === 'list') {
            memberCard.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p>${member.website}</p>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.otherInfo}</p>
            `;
        }

        membersContainer.appendChild(memberCard);
    });
}

document.querySelectorAll('.view-toggle input[name="view"]').forEach(input => {
    input.addEventListener('change', fetchAndDisplayMembers);
});

fetchAndDisplayMembers();