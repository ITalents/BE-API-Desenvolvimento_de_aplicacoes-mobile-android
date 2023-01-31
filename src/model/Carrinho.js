const mongoose = require("mongoose");

const CarrinhoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produtos" },
            nome: { type: String, unique: true},
            quantidade: { type: Number },
            descricao: { type: String},
            precoUnitario: {type: Number},
            imagem: { type: String},
            codigoBarra: { type: Number }
        },
    ],
    createdAt: { type: Date, required: true, default: Date.now() },
    precoTotal: { type: Number, required: true},
    frete: { type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true,ref: "usuarios" }
});

const Carrinho = mongoose.model("carrinhos", CarrinhoSchema);

module.exports = Carrinho;