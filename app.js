document.addEventListener('DOMContentLoaded', () => {

    // Elements
    const entityNameInput = document.getElementById('entity-name');
    const frequencyInput = document.getElementById('frequency');
    const addEntityButton = document.getElementById('add-entity');
    const entityList = document.getElementById('entity-list');
    const scanButton = document.getElementById('scan-button');

    // Helper to create list items
    function createEntityListItem(name, frequency) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${name}:</span> ${frequency} encounters 
                            <button class="remove-btn">Remove</button>`;

        // Remove button functionality
        listItem.querySelector('.remove-btn').addEventListener('click', () => {
            listItem.remove();
        });

        return listItem;
    }

    // Add Entity on button click
    addEntityButton.addEventListener('click', () => {
        const entityName = entityNameInput.value.trim();
        const frequency = frequencyInput.value.trim();

        if (entityName && frequency) {
            const listItem = createEntityListItem(entityName, frequency);
            entityList.appendChild(listItem);

            // Clear input fields after adding
            entityNameInput.value = '';
            frequencyInput.value = '';
        } else {
            alert('Please enter both entity name and frequency!');
        }
    });

    // Simulate scanning (for now, just a prompt)
    scanButton.addEventListener('click', () => {
        const scannedEntity = prompt('Enter scanned entity name:');
        const scannedFrequency = prompt('Enter frequency for the scanned entity:');

        if (scannedEntity && scannedFrequency) {
            const listItem = createEntityListItem(scannedEntity, scannedFrequency);
            entityList.appendChild(listItem);
        } else {
            alert('Scan failed, try again!');
        }
    });
});
