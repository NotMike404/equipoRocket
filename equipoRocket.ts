/*----------------------TEAM 1----------------------*/





/*----------------------TEAM 2----------------------*/






/*----------------------TEAM 3----------------------*/





/*----------------------TEAM 4----------------------*/


async function espera(): Promise<void> {
  console.log('Un momento porfavor...........');
} try {
    const lista = await reintentos();
    imprimirResumen(lista);
  } catch (err) {
    const mensaje = err instanceof Error ? err.message : String(err);
    console.error(`No pudimos encontrar lo solicitado: ${mensaje}`);
    process.exitCode = 1;
  }
  espera();