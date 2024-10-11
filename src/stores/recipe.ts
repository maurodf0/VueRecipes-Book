import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
}

type NewRecipe = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([
    {
      id: '1728686070047',
      image:
        'https://blog.giallozafferano.it/dulcisinforno/wp-content/uploads/2021/03/Carbonara-ricetta-5328.jpg',
      name: 'Pasta alla Carbonara',
      description:
        'Carbonara, ricetta perfetta per preparare la Pasta alla Carbonara come la servono a Roma, ricca e cremosa, un primo piatto romano favoloso, che tutti conoscono! Per preparare la vera carbonara sono necessari pochissimi ingredienti. Infatti, la carbonara secondo la ricetta originale, si prepara con la pasta, che possono essere spaghetti, rigatoni o mezze maniche (come si usa a Roma), il pecorino romano DOP stagionato, il guanciale (di qualità) e il pepe nero. Vabbè, e l’acqua per la cottura, tanto per essere precisi!\n\nI puristi della Carbonara non transigono: servono solo questi ingredienti e vengono banditi parmigiano al posto del pecorino, pancetta o bacon al posto del guanciale o, ancora peggio, panna o cipolla o aglio. Io non sarò tanto fiscale, tanto a casa propria ognuno è libero di cucinare come vuole, ma vi voglio comunque lasciare la ricetta originale della Carbonara, come viene servita nelle varie osterie di Roma. E quanta ne ho mangiata! Qualche anno fa ho avuto la fortuna di assistere ad uno showcooking dello Chef Luciano Monosilio, chiamato a Roma il Re della Carbonara, da cui ho appreso qualche trucchetto e come preparare una Carbonara perfetta, super cremosa!\n\nLa Carbonara è davvero semplice da fare, alla base della nostra cucina italiana, ma ci sono alcune piccole accortezze da rispettare, per farla nel migliore dei modi. Ecco la ricetta della Carbonara, la carbonara originale cremosissima!'
    },
    {
      id: '1728686206590',
      name: 'Tiramisù',
      image: 'https://www.galbani.it/sites/default/files/tiramisu_old_big.jpeg',
      description:
        "Se vi state chiedendo come preparare il tiramisù perfetto, ecco la risposta:\n\nInnanzitutto, per realizzarlo seguendo la ricetta più classica avrete bisogno di biscotti tipo savoiardi, liquore, caffè, uova, zucchero, cacao amaro e mascarpone, per il quale consigliamo l'impiego di quello Santa Lucia.\n\nCon questi ingredienti e seguendo i nostri suggerimenti riuscirete a dar vita al dessert più famoso della pasticceria italiana.\n\nSapevate che il 21 Marzo è il Tiramisù Day e nel 2019 Galbani ha realizzato il tiramisù più lungo del mondo, entrando nel Guinness World Record?\n\nEcco la ricetta per fare il tiramisù!"
    },
    {
      id: '1728686334915',
      image: 'https://www.misya.info/wp-content/uploads/2016/07/crepes-alla-nutella-misya.jpg',
      name: 'Crepes alla nutella',
      description:
        "Le crêpes sono il simbolo della cucina francese, sono un tipo di cialda sottile,tonda ed elastica, cotta su una superficie rovente, vengono farcite di ripieni vari, dolci o salati, l'impasto è a base di latte,uova e farina e nella versione dolce con aggiunta di zucchero all'impasto. Io l'altro pomeriggio le ho preparate in versione dolce, le classiche crêpes alla Nutella che piacciono a tutti in famiglia, facili veloci e goduriosissime. Questa è la ricetta di mia mamma per preparate le crêpes alla Nutella, provatela, è ottima ;)\n\nAggiungere il latte a filo e poi la farina ottenendo così una pastella liscia ed omogenea.\n\nCoprite la ciotola con della pellicola e mettete in frigo a riposare per mezz'ora.\n\nRiprendete ora la pastella e date una mescolata.\nFar sciogliere una noce di burro in una padella antiaderente, poi aggiungere un mestolo di pastella.\n\nInclinare la padella in modo da far stendere l'impasto su tutta la superficie, cuocere quindi ogni crepe un minuto per lato. Girare con l'aiuto di una spatola e cuocere un altro minuto.\n\nFar scivolare la crespella su un piatto e ancora calda farcirla per metà della sua superficie con la Nutella.\n\nRichiudere le crepes alla Nutella a portafogli e continuate nella preparazione fino a terminare tutto l'impasto.\n\nSpolverare con dello zucchero a velo e servire :)"
    },
    {
      id: '1728686794209',
      name: 'Casarecce con zucchine e gamberetti',
      image: 'https://cdn.chefincamicia.com/images/f5995c90359dcd1defe22a90d936fc78.1920.jpg',
      description:
        'Tagliare le zucchine ricavando solo la parte verde e ridurla in pezzi grossolani. Rosolare in padella con abbondante olio extravergine di oliva e sale che aiuterà a far fuoriuscire l’acqua di vegetazione della zucchina.\n\nNel frattempo, cuocere la pasta in acqua bollente salata Trascorsi circa 5 minuti di cottura, frullare le zucchine con qualche fogliolina di menta, aceto di vino bianco, aglio, sale e pepe. Nella stessa padella in cui hanno cotto le zucchine, rosolare uno spicchio d’aglio con abbondante olio extravergine di oliva. Aggiungere i gamberetti e scottarli per circa un minuto a fuoco vivo.\n\nVersare la crema di zucchine nella padella insieme ai gamberetti. Scolare la pasta al dente direttamente in padella e mantecarla con la crema di zucchine, i gamberetti e un filo di olio a crudo.\n\nImpiattare e decorare con qualche gamberetto e qualche fogliolina di menta.'
    }
  ]);

  const favoriteIds = ref<string[]>([]);

  const toggleFavorite = (id: string) => {
    if (favoriteIds.value.includes(id)) {
      favoriteIds.value = favoriteIds.value.filter((favId) => favId !== id);
    } else {
      favoriteIds.value.push(id);
    }
  };

  const isFavorite = (id: string) => {
    return favoriteIds.value.includes(id);
  };

  const addRecipe = (recipe: NewRecipe) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipe
    };
    recipes.value.push(newRecipe);
    return newRecipe;
  };

  const editRecipe = (updatedRecipe: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === updatedRecipe.id);
    if (index != -1) {
      recipes.value[index] = updatedRecipe;
    }
  };

  const getRecipeById = (id: string) => recipes.value.find((r) => r.id === id);

  const searchQuery = ref('');
  const recipeStore = useRecipeStore();

  const filteredRecipes = computed(() => {
    return recipes.value.filter((r) =>
      r.name.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
    );
  });

  const FavoriteRecipes = computed(() => {
    return recipes.value.filter((r) => favoriteIds.value.includes(r.id));
  });

  const removeRecipe = (id: string) => {
    recipes.value = recipes.value.filter((r) => r.id !== id);
  };

  return {
    recipes,
    addRecipe,
    getRecipeById,
    filteredRecipes,
    searchQuery,
    editRecipe,
    favoriteIds,
    toggleFavorite,
    isFavorite,
    FavoriteRecipes,
    removeRecipe
  };
});
