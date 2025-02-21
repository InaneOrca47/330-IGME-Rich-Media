// import { weapons } from './weapons.json' with {type:'json'};
// const data = weapons;

const get_weapons_data = () => {
    //make network call
    const something = fetch('weapons.json')
    .then(result => {
        return result.json;
    })
    .then(weapons_data => {
        debugger;
    });

}

const x = get_weapons_data();
// HTML conversion
const weapon_to_html = (weapon) => {
    const { name, damage_type, damage, reach } = weapon;

    return `
            <li>
                <h4>${name}</h4>
                <p><strong>Type:</strong> ${damage_type}</p>
                <p><strong>Damage:</strong> ${damage}</p>
                <p><strong>Reach:</strong> ${reach > 10 ? 'High' : (reach > 5 ? 'Medium' : 'Low')}</p>
            </li>`;
}

const all_weapons_to_html = (weapons) => {

    const html_items = weapons.map(weapon => {
        return weapon_to_html(weapon);
    });

    const list_html = `
            <ul>
                ${html_items.join('\n')}
            </u>
            `

    document.querySelector('ul').outerHTML = list_html;
}

all_weapons_to_html(data);
