import mongoose, { Document, Model, Schema } from "mongoose";

interface IMenu extends Document {
    _id: string;
    name: string;
    name_en: string;
    desc: string;
    brand: { _id: string; name: string };
    thumbnail: string;
    type: "ice" | "hot";
    category: "coffee" | "coldbrew" | "tea";
    sizes: {
        name: string;
        capacity: number;
        unit: "ml" | "oz";
    }[];
    prices: {
        size: "tall" | "grande" | "venti";
        price: number;
    }[];
    cautions: string[];
    allergies: string[];
    report: {
        size: "tall" | "grande" | "venti";
        capacity: number;
        unit: "ml" | "oz";
        kcal: number;
        carbohydrate: number;
        sugars: number;
        sodium: number;
        protein: number;
        fat: number;
        cholesterol: number;
        transFat: number;
        caffeine: number;
        saturatedFat: number;
    }[];
    relatedMenus?: {
        type: "ice" | "hot" | "sizeUp" | "sizeDown" | "decaf" | "caf";
        menu: {
            _id: string;
            name: string;
            thumbnail: string;
        };
    }[];
}

interface IMenuItem {
    _id: string;
    name: string;
    thumbnail: string;
    brand: { _id: string; name: string };
    report: {
        size: "tall" | "grande" | "venti";
        capacity: number;
        unit: "ml" | "oz";
        kcal: number;
        carbohydrate: number;
        sugars: number;
        sodium: number;
        protein: number;
        fat: number;
        cholesterol: number;
        transFat: number;
        caffeine: number;
        saturatedFat: number;
    };
}

const MenuSchema: Schema<IMenu> = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    brand: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Brand"
    },
    thumbnail: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["ice", "hot"],
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sizes: {
        type: [
            {
                name: String,
                capacity: Number,
                unit: String
            }
        ],
        required: true
    },
    prices: {
        type: [
            {
                size: String,
                price: Number
            }
        ],
        required: true
    },
    allergies: { type: [String] },
    cautions: { type: [String] },
    report: {
        type: [
            {
                size: String,
                capacity: Number,
                unit: {
                    type: String,
                    enum: ["ml", "oz"]
                },
                kcal: Number,
                carbohydrate: Number,
                sugars: Number,
                sodium: Number,
                protein: Number,
                fat: Number,
                cholesterol: Number,
                transFat: Number,
                caffeine: Number,
                saturatedFat: Number
            }
        ],
        required: true
    },
    relatedMenus: [
        {
            type: {
                type: String,
                enum: [
                    "ice",
                    "hot",
                    "sizeUp",
                    "sizeDown",
                    "decaf",
                    "caf",
                    "sugarUp",
                    "sugarDown"
                ]
            },
            menu: {
                type: mongoose.Types.ObjectId,
                ref: "Menu"
            }
        }
    ]
});

const Menu: Model<IMenu> =
    mongoose.models.Menu || mongoose.model<IMenu>("Menu", MenuSchema);

export default Menu;
export type { IMenu, IMenuItem };
