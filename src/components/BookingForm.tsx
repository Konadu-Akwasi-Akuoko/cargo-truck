"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown, PackageCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { calculateMovingRegionCost } from "@/lib/calculateRegionPrice";
import { store } from "@/store/store";
import { selectShippingPrice, setShippingPrice } from "@/store/bookingForm";
import { useSelector } from "react-redux";
import { calculateSizePrice } from "@/lib/calculateSizePrice";

const regions = [
  { label: "Ahafo", value: "ahafo" },
  { label: "Ashanti", value: "ashanti" },
  { label: "Bono East", value: "bonoEast" },
  { label: "Brong Ahafo", value: "brongAhafo" },
  { label: "Central", value: "central" },
  { label: "Eastern", value: "eastern" },
  { label: "Greater Accra", value: "greaterAccra" },
  { label: "North East", value: "northEast" },
  { label: "Northern", value: "northern" },
  { label: "Oti", value: "oti" },
  { label: "Savannah", value: "savannah" },
  { label: "Upper East", value: "upperEast" },
  { label: "Upper West", value: "upperWest" },
  { label: "Western", value: "western" },
  { label: "Western North", value: "westernNorth" },
  { label: "Volta", value: "volta" },
];

const sizes = [
  {
    label: "Extra small (approx. small traveling bag)",
    value: "xs",
  },
  {
    label: "Small (approx. medium traveling bag)",
    value: "sm",
  },
  {
    label: "Medium (approx. table top refrigerator)",
    value: "md",
  },
  {
    label: "Large (approx. double door refrigerator)",
    value: "lg",
  },
  {
    label: "Extra Large (approx. big wardrobe)",
    value: "xl",
  },
];

const bookingFormSchema = z.object({
  fullName: z.string().refine((value) => value !== "", {
    message: "Please enter your full name",
  }),
  phoneNumber: z.string().refine((value) => value !== "", {
    message: "Please enter your phone number",
  }),
  ghanaCardNumber: z.string().refine((value) => value !== "", {
    message: "Please enter your Ghana card number",
  }),
  shippingFrom: z.string({
    required_error: "Please select where you are shipping from",
  }),
  shippingTo: z.string({
    required_error: "Please select where you are shipping to",
  }),
  sizeCategory: z.string().optional(),
  sizeLength: z.number().optional(),
  sizeWidth: z.number().optional(),
  sizeHeight: z.number().optional(),
});

export function BookingForm() {
  const [isShippingFromOpen, setIsShippingFromOpen] = useState(false);
  const [isShippingToOpen, setIsShippingToOpen] = useState(false);
  const [showSelectCategory, setShowSelectCategory] = useState(true);
  const [showSelectSize, setShowSelectSize] = useState(false);

  const shippingPrice = useSelector(selectShippingPrice);

  const bookATripForm = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      sizeHeight: 0,
      sizeLength: 0,
      sizeWidth: 0,
      fullName: "",
      phoneNumber: "",
      ghanaCardNumber: "",
    },
  });

  const bookATripFormOnSubmit = (values: z.infer<typeof bookingFormSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <div className=" mt-10 flex flex-row justify-between items-end bg-white rounded-md ring-1 ring-zinc-200 shadow-md p-6">
        <div>
          <h1 className="text-4xl font-semibold">Book your trip</h1>
          <p className="mt-3">
            Provide details of your trip and others will join
          </p>
        </div>
        <div>
          <Button variant={"outline"}>Choose a Trip Instead</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-10">
        <div className="col-span-3">
          <div>
            <div className="bg-white px-10 py-6 shadow-md rounded-md ring-1 ring-zinc-200 ">
              <div className="flex flex-row gap-2 items-center">
                <PackageCheck className="w-8 h-8 text-primary" />
                <p className="text-lg font-medium">Items for delivery</p>
              </div>
              <div className="ring-1 ring-zinc-200 mt-6 p-6 rounded-md">
                <h2 className="text-2xl font-medium">Package Details</h2>
                <Form {...bookATripForm}>
                  <form
                    onSubmit={bookATripForm.handleSubmit(bookATripFormOnSubmit)}
                    className="space-y-6 mt-6"
                  >
                    <FormField
                      control={bookATripForm.control}
                      name="fullName"
                      rules={{ required: true }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Full Name"
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormDescription>
                            Your full name goes here
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bookATripForm.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0123456789"
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormDescription>
                            Type your phone number here
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={bookATripForm.control}
                      name="ghanaCardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ghana Card</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="GH000000001"
                              {...field}
                              type="text"
                            />
                          </FormControl>
                          <FormDescription>
                            Type the ID on you Ghana Card here
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <FormField
                        control={bookATripForm.control}
                        name="shippingFrom"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Shipping From</FormLabel>
                            <Popover
                              open={isShippingFromOpen}
                              onOpenChange={setIsShippingFromOpen}
                            >
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? regions.find(
                                          (region) =>
                                            region.value === field.value
                                        )?.label
                                      : "Choose a Region"}
                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-full p-0">
                                <Command>
                                  <CommandInput placeholder="Search region..." />
                                  <CommandEmpty>No region found.</CommandEmpty>
                                  <CommandGroup>
                                    {regions.map((region) => (
                                      <CommandItem
                                        value={region.label}
                                        key={region.value}
                                        onSelect={() => {
                                          bookATripForm.setValue(
                                            "shippingFrom",
                                            region.value
                                          );
                                          const shippingFromValue =
                                            bookATripForm.getValues(
                                              "shippingFrom"
                                            );
                                          const shippingToValue =
                                            bookATripForm.getValues(
                                              "shippingTo"
                                            );

                                          const size =
                                            bookATripForm.getValues(
                                              "sizeCategory"
                                            );
                                          const sizeWidth =
                                            bookATripForm.getValues(
                                              "sizeWidth"
                                            );
                                          const sizeHeight =
                                            bookATripForm.getValues(
                                              "sizeHeight"
                                            );
                                          const sizeLength =
                                            bookATripForm.getValues(
                                              "sizeLength"
                                            );

                                          if (
                                            shippingFromValue &&
                                            shippingToValue &&
                                            (size ||
                                              (sizeWidth &&
                                                sizeHeight &&
                                                sizeLength))
                                          ) {
                                            if (size) {
                                              store.dispatch(
                                                setShippingPrice(
                                                  calculateMovingRegionCost(
                                                    shippingFromValue,
                                                    shippingToValue
                                                  ) +
                                                    calculateSizePrice({
                                                      category: size,
                                                    })
                                                )
                                              );
                                            } else if (
                                              sizeHeight &&
                                              sizeWidth &&
                                              sizeLength
                                            ) {
                                              store.dispatch(
                                                setShippingPrice(
                                                  calculateMovingRegionCost(
                                                    shippingFromValue,
                                                    shippingToValue
                                                  ) +
                                                    calculateSizePrice({
                                                      width: sizeWidth,
                                                      height: sizeHeight,
                                                      length: sizeLength,
                                                    })
                                                )
                                              );
                                            }
                                          }

                                          setIsShippingFromOpen(false);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            region.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {region.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              This is where you are shipping your items from
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={bookATripForm.control}
                        name="shippingTo"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Shipping To</FormLabel>
                            <Popover
                              open={isShippingToOpen}
                              onOpenChange={setIsShippingToOpen}
                            >
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className={cn(
                                      "w-full justify-between",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value
                                      ? regions.find(
                                          (region) =>
                                            region.value === field.value
                                        )?.label
                                      : "Choose a Region"}
                                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-full p-0">
                                <Command>
                                  <CommandInput placeholder="Search region..." />
                                  <CommandEmpty>No region found.</CommandEmpty>
                                  <CommandGroup>
                                    {regions.map((region) => (
                                      <CommandItem
                                        value={region.label}
                                        key={region.value}
                                        onSelect={async () => {
                                          bookATripForm.setValue(
                                            "shippingTo",
                                            region.value
                                          );
                                          const shippingToValue =
                                            bookATripForm.getValues(
                                              "shippingTo"
                                            );
                                          const shippingFromValue =
                                            bookATripForm.getValues(
                                              "shippingFrom"
                                            );

                                          const size =
                                            bookATripForm.getValues(
                                              "sizeCategory"
                                            );
                                          const sizeWidth =
                                            bookATripForm.getValues(
                                              "sizeWidth"
                                            );
                                          const sizeHeight =
                                            bookATripForm.getValues(
                                              "sizeHeight"
                                            );
                                          const sizeLength =
                                            bookATripForm.getValues(
                                              "sizeLength"
                                            );

                                          if (
                                            shippingFromValue &&
                                            shippingToValue &&
                                            (size ||
                                              (sizeWidth &&
                                                sizeHeight &&
                                                sizeLength))
                                          ) {
                                            if (size) {
                                              store.dispatch(
                                                setShippingPrice(
                                                  calculateMovingRegionCost(
                                                    shippingFromValue,
                                                    shippingToValue
                                                  ) +
                                                    calculateSizePrice({
                                                      category: size,
                                                    })
                                                )
                                              );
                                            } else if (
                                              sizeHeight &&
                                              sizeWidth &&
                                              sizeLength
                                            ) {
                                              store.dispatch(
                                                setShippingPrice(
                                                  calculateMovingRegionCost(
                                                    shippingFromValue,
                                                    shippingToValue
                                                  ) +
                                                    calculateSizePrice({
                                                      width: sizeWidth,
                                                      height: sizeHeight,
                                                      length: sizeLength,
                                                    })
                                                )
                                              );
                                            }
                                          }
                                          setIsShippingToOpen(false);
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            region.value === field.value
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {region.label}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </Command>
                              </PopoverContent>
                            </Popover>
                            <FormDescription>
                              This is where you are shipping your items to
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Switch to select between selecting your own dimensions or auto dimensions */}
                    <div className="border p-4 rounded-lg flex flex-col space-y-6">
                      <div className="flex flex-row items-center justify-between ">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">
                            Select Dimensions
                          </FormLabel>
                          <FormDescription>
                            Switch between typing your own package dimensions or
                            selecting a package category
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={showSelectCategory}
                            onCheckedChange={() => {
                              setShowSelectCategory((prev) => {
                                return !prev;
                              });
                              if (!showSelectCategory) {
                                bookATripForm.setValue("sizeCategory", "");
                              } else {
                                bookATripForm.setValue("sizeHeight", 0);
                                bookATripForm.setValue("sizeLength", 0);
                                bookATripForm.setValue("sizeWidth", 0);
                              }
                            }}
                          />
                        </FormControl>
                      </div>
                      {showSelectCategory ? (
                        <FormField
                          control={bookATripForm.control}
                          name="sizeCategory"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Size Category</FormLabel>
                              <Popover
                                open={showSelectSize}
                                onOpenChange={setShowSelectSize}
                              >
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      role="combobox"
                                      className={cn(
                                        "w-full justify-between",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value
                                        ? sizes.find(
                                            (sizes) =>
                                              sizes.value === field.value
                                          )?.label
                                        : "Choose a Size Category"}
                                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search size category..." />
                                    <CommandEmpty>
                                      No size category found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {sizes.map((size) => (
                                        <CommandItem
                                          value={size.label}
                                          key={size.value}
                                          onSelect={() => {
                                            bookATripForm.setValue(
                                              "sizeCategory",
                                              size.value
                                            );

                                            bookATripForm.setValue(
                                              "sizeWidth",
                                              0
                                            );

                                            bookATripForm.setValue(
                                              "sizeHeight",
                                              0
                                            );

                                            bookATripForm.setValue(
                                              "sizeLength",
                                              0
                                            );

                                            const shippingToValue =
                                              bookATripForm.getValues(
                                                "shippingTo"
                                              );
                                            const shippingFromValue =
                                              bookATripForm.getValues(
                                                "shippingFrom"
                                              );

                                            store.dispatch(
                                              setShippingPrice(
                                                calculateMovingRegionCost(
                                                  shippingFromValue,
                                                  shippingToValue
                                                ) +
                                                  calculateSizePrice({
                                                    category: size.value,
                                                  })
                                              )
                                            );
                                            setShowSelectSize(false);
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              size.value === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {size.label}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              <FormDescription>
                                Select an approximate size based on your
                                packages or cargo
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ) : (
                        <div className="grid grid-cols-3 gap-4">
                          <FormField
                            control={bookATripForm.control}
                            name="sizeHeight"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Height</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="height of package"
                                    {...field}
                                    type="number"
                                    onChange={(e) => {
                                      field.onChange(Number(e.target.value));

                                      const sizeHeight =
                                        bookATripForm.getValues("sizeHeight");
                                      const sizeWidth =
                                        bookATripForm.getValues("sizeWidth");
                                      const sizeLength =
                                        bookATripForm.getValues("sizeLength");

                                      const shippingToValue =
                                        bookATripForm.getValues("shippingTo");
                                      const shippingFromValue =
                                        bookATripForm.getValues("shippingFrom");

                                      if (
                                        sizeHeight &&
                                        sizeWidth &&
                                        sizeLength
                                      ) {
                                        store.dispatch(
                                          setShippingPrice(
                                            calculateMovingRegionCost(
                                              shippingFromValue,
                                              shippingToValue
                                            ) +
                                              calculateSizePrice({
                                                width: sizeWidth,
                                                height: sizeHeight,
                                                length: sizeLength,
                                              })
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Type the height (inches) of your package here
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={bookATripForm.control}
                            name="sizeWidth"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Width</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="width of package"
                                    {...field}
                                    type="number"
                                    onChange={(e) => {
                                      field.onChange(Number(e.target.value));

                                      const sizeHeight =
                                        bookATripForm.getValues("sizeHeight");
                                      const sizeWidth =
                                        bookATripForm.getValues("sizeWidth");
                                      const sizeLength =
                                        bookATripForm.getValues("sizeLength");

                                      const shippingToValue =
                                        bookATripForm.getValues("shippingTo");
                                      const shippingFromValue =
                                        bookATripForm.getValues("shippingFrom");

                                      if (
                                        sizeHeight &&
                                        sizeWidth &&
                                        sizeLength
                                      ) {
                                        store.dispatch(
                                          setShippingPrice(
                                            calculateMovingRegionCost(
                                              shippingFromValue,
                                              shippingToValue
                                            ) +
                                              calculateSizePrice({
                                                width: sizeWidth,
                                                height: sizeHeight,
                                                length: sizeLength,
                                              })
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Type the width (inches) of your package here
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={bookATripForm.control}
                            name="sizeLength"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Length</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="length of package"
                                    {...field}
                                    type="number"
                                    onChange={(e) => {
                                      field.onChange(Number(e.target.value));

                                      const sizeHeight =
                                        bookATripForm.getValues("sizeHeight");
                                      const sizeWidth =
                                        bookATripForm.getValues("sizeWidth");
                                      const sizeLength =
                                        bookATripForm.getValues("sizeLength");

                                      const shippingToValue =
                                        bookATripForm.getValues("shippingTo");
                                      const shippingFromValue =
                                        bookATripForm.getValues("shippingFrom");

                                      if (
                                        sizeHeight &&
                                        sizeWidth &&
                                        sizeLength
                                      ) {
                                        store.dispatch(
                                          setShippingPrice(
                                            calculateMovingRegionCost(
                                              shippingFromValue,
                                              shippingToValue
                                            ) +
                                              calculateSizePrice({
                                                width: sizeWidth,
                                                height: sizeHeight,
                                                length: sizeLength,
                                              })
                                          )
                                        );
                                      }
                                    }}
                                  />
                                </FormControl>
                                <FormDescription>
                                  Type the length (inches) of your package here
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                    </div>
                    <Button type="submit">Calculate</Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* Price estimator */}

        <div className="col-span-1 rounded-md overflow-hidden ring-1 ring-zinc-200 shadow-md h-fit sticky top-0">
          <div className="w-full bg-primary h-36 flex flex-col justify-center items-center text-white gap-y-2">
            <p className="w-fit text-xl font-medium">Estimated Total Cost</p>
            <p className="w-fit font-medium">GH&#8373;{shippingPrice}</p>
          </div>
          <div className="bg-white h-64 flex flex-col justify-center items-center gap-y-4 p-4">
            <p className=" text-lg font-medium">
              Below are included in the quote above
            </p>
            <p className="font-medium text-zinc-500">Weight: 12kg</p>
            <p className="font-medium text-zinc-500">Distance: 13km</p>
            <Button variant={"default"}>Book Trip</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
