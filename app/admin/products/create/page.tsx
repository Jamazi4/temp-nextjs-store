import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";
import { FormInput } from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import { TextAreaInput } from "@/components/form/TextAreaInput";
import { CheckboxInput } from "@/components/form/CheckboxInput";
import { SubmitButton } from "@/components/form/Buttons";

const CreateProductPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const descrtiption = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={descrtiption}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
            <SubmitButton text="create product" className="mt-8" />
          </div>
        </FormContainer>
      </div>
    </div>
  );
};
export default CreateProductPage;
