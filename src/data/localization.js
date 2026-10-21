const names = {
  'infinity-pool': 'Piscine à débordement',
  'private-jacuzzi': 'Jacuzzi privé',
  'panoramic-terrace': 'Terrasse panoramique',
  'landscape-garden': 'Jardin paysager',
  'outdoor-fireplace': 'Cheminée extérieure',
  'interior-fireplace': 'Cheminée intérieure',
  'premium-kitchen': 'Cuisine premium',
  'interior-furniture-package': 'Pack mobilier intérieur',
  'smart-home': 'Maison intelligente',
  'private-sauna': 'Sauna privé',
  'architectural-lighting': 'Éclairage architectural',
  'outdoor-kitchen': 'Cuisine extérieure',
}

const descriptions = {
  'infinity-pool': 'Prolongez l’horizon avec une piscine privée intégrée au paysage.',
  'private-jacuzzi': 'Créez un espace intime pour vous détendre à ciel ouvert.',
  'panoramic-terrace': 'Transformez les abords du chalet en une véritable pièce à vivre.',
  'landscape-garden': 'Un jardin pensé pour prolonger naturellement votre chalet.',
  'outdoor-fireplace': 'Une atmosphère chaleureuse pour vos soirées en plein air.',
  'interior-fireplace': 'Un point central élégant et chaleureux pour votre intérieur.',
  'premium-kitchen': 'Une cuisine raffinée conçue pour vivre et recevoir.',
  'interior-furniture-package': 'Une sélection complète, accordée à l’architecture de votre chalet.',
  'smart-home': 'Pilotez lumière, confort thermique et sécurité depuis une seule interface.',
  'private-sauna': 'Un espace de bien-être privé pour faire de chaque séjour une parenthèse.',
  'architectural-lighting': 'Une lumière maîtrisée pour révéler votre chalet après le coucher du soleil.',
  'outdoor-kitchen': 'Cuisinez et recevez dehors, au plus près de la nature.',
}

const regions = {
  'Northwest Tunisia': 'Nord-Ouest tunisien',
  'Northeast Tunisia': 'Nord-Est tunisien',
  'Northern Tunisia': 'Nord tunisien',
}

const categories = {
  coast: 'Littoral',
  mountain: 'Montagne',
  Contemporary: 'Contemporain',
  Mountain: 'Montagne',
  Nature: 'Nature',
}

export const localizedName = (record) =>
  names[record.id] || record.name

export const localizedDescription = (record) =>
  descriptions[record.id] || record.description || record.shortDescription

export const localizedRegion = (region) =>
  regions[region] || region

export const localizedCategory = (category) =>
  categories[category] || category
