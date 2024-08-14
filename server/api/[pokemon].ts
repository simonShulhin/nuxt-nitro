export default defineEventHandler(async (event) => {
  const { pokemon } = event.context.params;
  const res = await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  console.log(event.context);

  return { id: res.id, name: res.name, sprite: res.sprites.front_default };
});
