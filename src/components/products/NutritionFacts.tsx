
import { Product } from "@/data/products";

interface NutritionFactsProps {
  product: Product;
}

export const NutritionFacts = ({ product }: NutritionFactsProps) => {
  const { nutrition } = product;
  
  return (
    <div className="border border-black p-4 w-full max-w-xs font-sans">
      <h3 className="text-2xl font-bold text-black mb-1">Nutrition Facts</h3>
      <p className="text-sm border-b border-black pb-1 mb-1">
        Serving Size {nutrition.servingSize}
      </p>
      
      <div className="border-b-8 border-black py-1 mb-1">
        <p className="font-bold text-sm">Amount Per Serving</p>
        <div className="flex justify-between">
          <p className="font-bold text-lg">Calories</p>
          <p className="font-bold text-lg">{nutrition.calories}</p>
        </div>
      </div>
      
      <div className="text-right text-sm border-b border-black py-1 mb-1">
        % Daily Value*
      </div>
      
      <NutritionItem name="Total Fat" value={`${nutrition.totalFat}g`} percent={0} />
      <NutritionItem name="Saturated Fat" value={`${nutrition.saturatedFat}g`} percent={0} indented />
      <NutritionItem name="Trans Fat" value={`${nutrition.transFat}g`} indented />
      <NutritionItem name="Cholesterol" value={`${nutrition.cholesterol}mg`} percent={0} />
      <NutritionItem name="Sodium" value={`${nutrition.sodium}mg`} percent={0} />
      <NutritionItem name="Total Carbohydrate" value={`${nutrition.totalCarbs}g`} percent={3} />
      <NutritionItem name="Dietary Fiber" value={`${nutrition.dietaryFiber}g`} percent={0} indented />
      <NutritionItem name="Total Sugars" value={`${nutrition.sugars}g`} indented />
      <NutritionItem name="Protein" value={`${nutrition.protein}g`} percent={0} isLast />
      
      <p className="text-xs mt-4 text-black/80">
        * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
      </p>
    </div>
  );
};

interface NutritionItemProps {
  name: string;
  value: string;
  percent?: number;
  indented?: boolean;
  isLast?: boolean;
}

const NutritionItem = ({ name, value, percent, indented = false, isLast = false }: NutritionItemProps) => (
  <div className={`flex justify-between text-sm py-1 ${!isLast ? "border-b border-black/30" : ""}`}>
    <p className={`font-bold ${indented ? "pl-4" : ""}`}>{name} {value}</p>
    {percent !== undefined && <p className="font-bold">{percent}%</p>}
  </div>
);

export default NutritionFacts;
