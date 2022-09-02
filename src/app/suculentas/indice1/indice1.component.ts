import { Component, OnInit } from '@angular/core';
import { Generos } from 'src/app/interfaces/generos';
import { EspeciesNome } from '../../interfaces/suculentas';
import { Cores } from '../../interfaces/cores';

@Component({
  selector: 'app-indice1',
  templateUrl: './indice1.component.html',
  styleUrls: ['./indice1.component.css']
})
export class Indice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  adromischus: Generos[] = [
    {
      nomeGenero: 'Adromischus', especies: [
        { especie: 'Adromischus cristatus' },
        { especie: 'Adromischus cooperi' }
      ]
    }
  ]

  aeonium: Generos[] = [
    {
      nomeGenero: 'Aeonium', especies: [
        { especie: 'Aeonium arboreum atropurpureum' },
        { especie: 'Aeonium castello paivae variegata' },
        { especie: 'Aeonium haworthii variegação "Kiwi" rosa"' },
        { especie: 'Aeonium haworthii variegação "Kiwi" pink"' }
      ]
    }
  ]

  aloe: Generos[] = [
    {
      nomeGenero: 'Aloe', especies: [
        { especie: 'Aloe aristata' },
        { especie: 'Aloe black gem' },
        { especie: 'Aloe juvenna' },
        { especie: 'Aloe vera' }
      ]
    }
  ]

  begonia: Generos[] = [
    {
      nomeGenero: 'Begônia', especies: [
        { especie: 'Begônia rex' }
      ]
    }
  ]

  callisia: Generos[] = [
    {
      nomeGenero: 'Callisia', especies: [
        { especie: 'Callisia repens variegata "Tostão rosa"' },
        { especie: 'Callisia repens variegata "Tostão dourado"' }
      ]
    }
  ]

  ceropegia: Generos[] = [
    {
      nomeGenero: 'Ceropegia', especies: [
        { especie: 'Ceropegia woodii, ou "Corações emaranhados"' },
        { especie: 'Ceropegia woodii variegata, ou "Corações emaranhados variegata"' }
      ]
    }
  ]

  cotyledon: Generos[] = [
    {
      nomeGenero: 'Cotyledon', especies: [
        { especie: 'Cotyledon orbiculata, ou "Chifre de alce"' },
        { especie: 'Cotyleon tomentosa, ou "Pata de urso"' }
      ]
    }
  ]

  corpuscularia: Generos[] = [
    {
      nomeGenero: 'Corpuscularia', especies: [
        { especie: 'Corpuscularia lehmanii, ou "Coração partido"' }
      ]
    }
  ]

  crassula: Generos[] = [
    {
      nomeGenero: 'Crassula', especies: [
        { especie: 'Crassula capitella variação "Campfire"' },
        { especie: 'Crassula capitella variação "Thyrsiflora"' },
        { especie: 'Crassula humbertii' },
        { especie: 'Crassula ovata, ou "Planta jade"' },
        { especie: 'Crassula ovata subspécie "Gollum", ou "Orelha de Shrek"' },
        { especie: 'Crassula perforata' },
        { especie: 'Crassula perforata variegata' },
        { especie: 'Crassula rupestris' }
      ]
    }
  ]

  dracaena: Generos[] = [
    {
      nomeGenero: 'Dracaena', especies: [
        { especie: 'Dracaena trifasciata, ou "Espada de São Jorge"' },
        { especie: 'Dracaena trifasciata variegata, ou "Espada de Santa Bárbara"' },
        { especie: 'Dracaena trifasciata variação "Moonshine"' },
        { especie: 'Dracaena trifasciata variação "Hahnii", ou "Mini espada de São Jorge"' },
        { especie: 'Dracaena trifasciata variação "Hahnii" variegata, ou "Mini espada de Santa Bárbara"' }
      ]
    }
  ]

  echeveria: Generos[] = [
    {
      nomeGenero: 'Echeveria', especies: [
        { especie: 'Echeveria "Beatrice"', cor: [ {cor: 'Branca'}, {cor: 'Amarela'}] },
        { especie: 'Echeveria "Black prince"' },
        { especie: 'Echeveria "Blue heron"' },
        { especie: 'Echeveria "Blue star"' },
        { especie: 'Echeveria "Brown rose"' },
        { especie: 'Echeveria chroma' },
        { especie: 'Echeveria "Crispate beauty"' },
        { especie: 'Echeveria "Dark vader"' },
        { especie: 'Echeveria dionysos' },
        { especie: 'Echeveria dorette' },
        { especie: 'Echeveria "Elegans blue"' },
        { especie: 'Echeveria fantome' },
        { especie: 'Echeveria "Hot chocolate"' },
        { especie: 'Echeveria lilacina' },
        { especie: 'Echeveria melaco' },
        { especie: 'Echeveria metallica' },
        { especie: 'Echeveria "Milky way"' },
        { especie: 'Echeveria multicaulis' },
        { especie: 'Echeveria "Neon breakers"' },
        { especie: 'Echeveria pullidonis' },
        { especie: 'Echeveria runyonii "San Carlos"' },
        { especie: 'Echeveria runyonii "Topsy turvy"' },
        { especie: 'Echeveria shaviana' }
      ]
    }
  ]

  graptopetalum: Generos[] = [
    {
      nomeGenero: 'Graptopetalum e híbridos', especies: [
        { especie: 'Graptopetalum "MacDougallii' },
        { especie: 'Graptopetalum mendozae' },
        { especie: 'Graptopetalum paraguayense' },
        { especie: 'Graptosedum "Bronze"' },
        { especie: 'Graptoveria "Debbie"' },
        { especie: 'Graptoveria "Fred Ives"' },
        { especie: 'Graptoveria "Silver star"' },
        { especie: 'Graptoveria "Topsy debbie" ou "Cupid"' }
      ]
    }
  ]

  haworthia: Generos[] = [
    {
      nomeGenero: 'Haworthia', especies: [
        { especie: 'Haworthia cymbiformis' },
        { especie: 'Haworthia turgida' }
      ]
    }
  ]

  haworthiopsis: Generos[] = [
    {
      nomeGenero: 'Haworthiopsis', especies: [
        { especie: 'Haworthiopsis attenuata ou "Planta zebra"' },
        { especie: 'Haworthiopsis limifolia' },
        { especie: 'Haworthiopsis reinwardtii' }
      ]
    }
  ]

  kalanchoe: Generos[] = [
    {
      nomeGenero: 'Kalanchoe', especies: [
        { especie: 'Kalanchoe bracteata ou "Colher de prata"' },
        { especie: 'Kalanchoe delagoensis ou "Mãe de milhares"' },
        { especie: 'Kalanchoe fedtschenkoi variegata' },
        { especie: 'Kalanchoe gastonis-bonnieri ou "Orelha de burro"' },
        { especie: 'Kalanchoe humilis' },
        { especie: 'Kalanchoe laetivirens ou "Mãe de milhares"' },
        { especie: 'Kalanchoe laxiflora' },
        { especie: 'Kalanchoe marnieriana' },
        { especie: 'Kalanchoe orgyalis ou "Colher de cobre"' },
        { especie: 'Kalanchoe "Pink butterfly" ou "Mãe de milhares rosa"' },
        { especie: 'Kalanchoe rhombopilosa' },
        { especie: 'Kalanchoe sexangularis' },
        { especie: 'Kalanchoe tomentosa ou "Orelha de gato"' },
        { especie: 'Kalanchoe tomentosa variação chocolate' },
        { especie: 'Kalanchoe tubiflora ou "Mãe de milhares"' },
      ]
    }
  ]

  monanthes: Generos[] = [
    {
      nomeGenero: 'Monanthes', especies: [
        { especie: 'Monanthes polyphylla' }
      ]
    }
  ]

  opuntia: Generos[] = [
    {
      nomeGenero: 'Opuntia',
      especies: [
        {
          especie: 'Opuntia microdasys, ou "Orelha de Mickey/coelho"',
          link: '',
          cor: [
            { cor: 'branca' },
            { cor: 'amarela' },
            { cor: 'vermelha ou cobre' }
          ]
        }
      ]
    }
  ]

  othonna: Generos[] = [
    {
      nomeGenero: 'Othonna', especies: [
        { especie: 'Othonna capensis ou "Colar de rubi"' }
      ]
    }
  ]

  pachyphytum: Generos[] = [
    {
      nomeGenero: 'Pachyphytum', especies: [
        { especie: 'Pachyphytum compactum, ou "Planta diamante"' }
      ]
    }
  ]

  peperomia: Generos[] = [
    {
      nomeGenero: 'Peperômia', especies: [
        { especie: 'Peperômia dolabriformis' },
        { especie: 'Peperômia ferreyrae' },
        { especie: 'Peperômia pendens' },
        { especie: 'Peperômia prostrata ou "Colar de tartarugas"' },
        { especie: 'Peperômia "Red log"' }
      ]
    }
  ]

  plectranthus: Generos[] = [
    {
      nomeGenero: 'Plectranthus', especies: [
        { especie: 'Plectranthus prostatus, ou "Boldinho suculento"' }
      ]
    }
  ]

  portulacaria: Generos[] = [
    {
      nomeGenero: 'Portulacaria', especies: [
        { especie: 'Portulacaria afra, ou "Arbusto de elefante"' },
        { especie: 'Portulacaria afra variegata, ou "Arbusto de elefante"' }
      ]
    }
  ]

  rhipsalis: Generos[] = [
    {
      nomeGenero: 'Rhipsalis', especies: [
        { especie: 'Rhipsalis erecta' }
      ]
    }
  ]

  sansevieria: Generos[] = [
    {
      nomeGenero: 'Sansevieria', especies: [
        { especie: 'Sansevieria cylindrica, ou "Lança de São Jorge"' }
      ]
    }
  ]

  schlumbergera: Generos[] = [
    {
      nomeGenero: 'Schlumbergera', especies: [
        { especie: 'Schlumbergera truncata, ou "Flor de maio" (flores pink)' },
        { especie: 'Schlumbergera truncata variegata, ou "Flor de maio" (flores rosa' }
      ]
    }
  ]

  scilla: Generos[] = [
    {
      nomeGenero: 'Scilla', especies: [
        { especie: 'Scilla violacea' }
      ]
    }
  ]

  sedum: Generos[] = [
    {
      nomeGenero: 'Sedum e híbridos', especies: [
        { especie: 'Sedum adolphi variação "Firestorm"' },
        { especie: 'Sedum adolphi variação "Golden glow"' },
        { especie: 'Sedum adolphi marrom' },
        { especie: 'Sedum burrito ou "Rabo de burro"' },
        { especie: 'Sedum dasyphyllum' },
        { especie: 'Sedum japonicum ou "Sedum oro", variação amarela ou dourada' },
        { especie: 'Sedum japonicum ou "Sedum oro", variação verde'},
        { especie: 'Sedum morganianum ou "Rabo de burro"' },
        { especie: 'Sedum multiceps ou "Pompom"' },
        { especie: 'Sedum obesum' },
        { especie: 'Sedum rubrotinctum' },
        { especie: 'Sedeveria "Letizia"' }
      ]
    }
  ]

  senecio: Generos[] = [
    {
      nomeGenero: 'Senecio', especies: [
        {especie: 'Senecio douglasii ou "Cinerária"'},
        { especie: 'Senecio herreianus ou "Colar de azeitonas"' },
        { especie: 'Senecio herreianus variação dinter ou "Colar de melancias"' },
        { especie: 'Senecio peregrinus ou "Colar de golfinhos"' },
        { especie: 'Senecio rowleyanus ou "Colar de pérolas"'}
      ]
    }
  ]

  sinocrassula: Generos[] = [
    {
      nomeGenero: 'Sinocrassula', especies: [
        { especie: 'Sinocrassula yunnanensis, ou "Planta ouriço"' }
      ]
    }
  ]

  stapelia: Generos[] = [
    {
      nomeGenero: 'Stapelia', especies: [
        { especie: 'Stapelia hirsuta' }
      ]
    }
  ]

  tradescantia: Generos[] = [
    {
      nomeGenero: 'Tradescantia', especies: [
        { especie: 'Tradescantia fluminensis variegata' },
        { especie: 'Tradescantia spathacea' }
      ]
    }
  ]

  zamioculca: Generos[] = [
    {
      nomeGenero: 'Zamioculca', especies: [
        { especie: 'Zamioculcas zamiifolia'}
      ]
    }
  ]

}
