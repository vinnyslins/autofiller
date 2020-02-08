(() => {
  const personalValues = {
    email: 'vinnysflins@gmail.com',
    name: 'Vinnys Lins',
    contact: '(11) 97207-2677',
    links: 'https://github.com/vinnyslins | https://www.linkedin.com/in/vinnyslins',
    bio: 'Software Developer at Dextra'
  }

  const $$ = element => document.querySelectorAll(element)

  const fields = $$('[aria-label]')

  for (const element of fields) {
    const value = element.getAttribute('aria-label')

    if (/(e-mail|email)/i.test(value)) {
      element.value = personalValues.email
    }

    if (/nome/i.test(value)) {
      element.value = personalValues.name
    }

    if (/contato/i.test(value)) {
      element.value = personalValues.contact
    }

    if (/(github|linkedin)/i.test(value)) {
      element.value = personalValues.links
    }

    if (/bio/i.test(value)) {
      element.value = personalValues.bio
    }
  }
})()
