import { Product } from "@/lib/types";

export default function ProductFormFields({ product }: { product?: Product }) {
  return (
    <div className="space-y-8 max-w-2xl">
      {/* English fields */}
      <div className="space-y-5">
        <div className="text-[10px] tracking-[2px] uppercase text-ink/40">Англи хэлний мэдээлэл</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField label="Нэр (Англи)" name="name" defaultValue={product?.name} required />
          <TextField label="Шошго (Англи)" name="tag" defaultValue={product?.tag} />
        </div>

        <TextField label="Товч тайлбар (Англи)" name="tagline" defaultValue={product?.tagline} placeholder="Short one-line hook" />

        <div>
          <label className="block text-[10px] tracking-wider uppercase text-ink/50 mb-1.5">Дэлгэрэнгүй / Орц (Англи)</label>
          <textarea
            name="description"
            rows={3}
            defaultValue={product?.description}
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-[15px] focus:outline-none focus:border-green bg-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <TextField label="Хадгалах хугацаа (Англи)" name="shelfLife" defaultValue={product?.shelfLife} placeholder="5 days" />
          <TextField label="Хайрцаг (Англи)" name="casePack" defaultValue={product?.casePack} placeholder="12 units" />
        </div>
      </div>

      {/* Mongolian fields */}
      <div className="space-y-5 pt-2 border-t border-black/10">
        <div className="text-[10px] tracking-[2px] uppercase text-ink/40 pt-5">
          Монгол хэлний мэдээлэл <span className="text-ink/30">(хоосон орхисон бол Англи хэлнээс авна)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextField label="Нэр (Name)" name="nameMn" defaultValue={product?.nameMn} />
          <TextField label="Шошго (Tag)" name="tagMn" defaultValue={product?.tagMn} />
        </div>

        <TextField label="Тайлбар (Tagline)" name="taglineMn" defaultValue={product?.taglineMn} />

        <div>
          <label className="block text-[10px] tracking-wider uppercase text-ink/50 mb-1.5">Дэлгэрэнгүй (Description)</label>
          <textarea
            name="descriptionMn"
            rows={3}
            defaultValue={product?.descriptionMn}
            className="w-full rounded-lg border border-black/15 px-4 py-3 text-[15px] focus:outline-none focus:border-green bg-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <TextField label="Хадгалах хугацаа (Shelf life)" name="shelfLifeMn" defaultValue={product?.shelfLifeMn} placeholder="5 хоног" />
          <TextField label="Хайрцаг (Case pack)" name="casePackMn" defaultValue={product?.casePackMn} placeholder="12 ширхэг" />
        </div>
      </div>

      {/* Shared fields */}
      <div className="space-y-5 pt-2 border-t border-black/10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-5">
          <TextField label="Үнэ (₮)" name="price" type="number" defaultValue={product?.price?.toString()} required />
          <TextField label="Нэгж (Англи)" name="unit" defaultValue={product?.unit || "per case"} />
          <TextField label="Нэгж (Монгол)" name="unitMn" defaultValue={product?.unitMn || "хайрцагт"} />
          <TextField label="Жин" name="weight" defaultValue={product?.weight} placeholder="800g" />
        </div>

        <TextField label="Зургийн зам" name="image" defaultValue={product?.image} placeholder="/pictures/filename.jpg эсвэл https://..." />

        {/* Category */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-[10px] tracking-wider uppercase text-ink/50 mb-1.5">Ангилал (код)</label>
            <select
              name="category"
              defaultValue={product?.category ?? "talh"}
              className="w-full rounded-lg border border-black/15 px-4 py-3 text-[15px] focus:outline-none focus:border-brand-green bg-white"
            >
              <option value="talh">talh</option>
              <option value="naiin-boov">naiin-boov</option>
              <option value="jignmeg">jignmeg</option>
              <option value="bialuu">bialuu</option>
              <option value="belen">belen</option>
              <option value="other">other</option>
            </select>
          </div>
          <TextField label="Ангилал МН" name="categoryMn" defaultValue={product?.categoryMn} placeholder="Талх" />
          <TextField label="Category EN" name="categoryEn" defaultValue={product?.categoryEn} placeholder="Bread" />
        </div>

        <label className="flex items-center gap-2.5 text-sm cursor-pointer">
          <input
            type="checkbox"
            name="inStock"
            defaultChecked={product?.inStock ?? true}
            className="w-4 h-4 accent-[#468456]"
          />
          <span className="font-medium">Зарагдаж байгаа / In stock</span>
          <span className="text-ink/40 text-[12px]">— тэмдэглэхгүй бол захиалах боломжгүй харагдана</span>
        </label>
      </div>
    </div>
  );
}

function TextField({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] tracking-wider uppercase text-ink/50 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        step={type === "number" ? "1" : undefined}
        className="w-full rounded-lg border border-black/15 px-4 py-3 text-[15px] focus:outline-none focus:border-green bg-white"
      />
    </div>
  );
}
