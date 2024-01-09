class Template {
  getItemTemplate(title) {
    return `
        <article>
        <h3>${title}</h3>
        <div class="unit-container" >
            <span class="unit" >Tensão: </span>
            <span class="value">$volt</span>
        </div>
        <div class="unit-container" >
            <span class="unit" >Potência: </span>
            <span class="value">$power</span>
        </div>
        <div class="unit-container" >
            <span class="unit" >Corrente: </span>
            <span class="value">$current</span>
        </div>
        <div class="unit-container" >
            <span class="unit" >Resistência: </span>
            <span class="value">$resistance</span>
        </div>
    </article>
        `;
  }

  render(values, title) {
    let templateItem = this.getItemTemplate(title);

    Object.entries(values).forEach((item) => {
      const [key, value] = item;
      const findStr = "$" + key;
      templateItem = templateItem.replace(findStr, value);
    });

    return templateItem;
  }
}

const templateService = new Template();
