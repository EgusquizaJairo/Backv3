// const pruebita = require('./PruebitaRoutes.js');
const login = require('./LoginRoutes.js');
const person = require('./PersonRoutes.js');
// const pago_manual = require('./PagoManualRoutes.js')
// const machine = require('./MachineRoutes.js')
// const slot_room = require('./SlotRoomRoutes.js')
// const product = require('./ProductRoutes.js')
// const inventory = require('./InventoryRoutes.js')
// const pedido_bar = require('./PedidoBarRoutes.js')
// const tipo_cliente = require('./ClientTypeRoutes.js')
// const parametros = require('./ParametersRoutes.js')
// const estadisticas = require('./StatisticsRoutes.js')
module.exports = function(app){

    // app.use('/prueba', pruebita);
    app.use('/auth',login);
    app.use('/person', person);
    // app.use('/pago_manual',pago_manual);
    // app.use('/machine',machine);
    // app.use('/slot_room',slot_room);
    // app.use('/product',product);
    // app.use('/inventory',inventory);
    // app.use('/pedido_bar',pedido_bar);
    // app.use('/tipo_cliente',tipo_cliente);
    // app.use('/parametro',parametros);
    // app.use('/estadistica',estadisticas);
}