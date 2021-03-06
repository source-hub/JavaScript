 
//------------------------------------------------------------------------------
// Callback
//------------------------------------------------------------------------------

// Асинхронность можно использовать различными способами. Одним из таких
// способов является callback функции - запускается некоторое действие и когда
// оно завершается вызывается callback функция(или просто callback). Например,
// функция setTimeout позволяет выполнить некоторое действие после прошествия
// определённого количества мс:
setTimeout(() => console.log("Tick"), 500);
