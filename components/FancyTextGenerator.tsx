"use client";

import { useState } from "react";
import { transform, fontStyles } from "@/utils/transformers";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Sparkles, Trash2, Type } from "lucide-react";

export default function FancyTextGenerator() {
    const [input, setInput] = useState("Fancy Text");

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard", {
            description: text,
            duration: 2000,
        });
    };

    const handleClear = () => {
        setInput("");
        toast.info("Cleared text");
    };

    const getTextDecoration = (styleId: string) => {
        if (styleId === 'strike') return 'line-through';
        if (styleId === 'underline') return 'underline';
        if (styleId === 'slash') return 'line-through';
        return 'none';
    };

    const getTransformedText = (text: string, styleId: string) => {
        // For strikethrough and underline, return plain text (CSS will handle decoration)
        if (styleId === 'strike' || styleId === 'underline' || styleId === 'slash') {
            return text || "Fancy Text";
        }
        return transform(text || "Fancy Text", styleId);
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Input Area - Sticky */}
            <div className="sticky top-4 z-20 mb-8">
                <Card className="p-1 shadow-lg bg-background/95 backdrop-blur-md border-muted-foreground/10">
                    <div className="relative">
                        <Textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type something amazing..."
                            className="min-h-[160px] text-lg md:text-xl resize-none border-0 focus-visible:ring-0 bg-transparent p-6 placeholder:text-muted-foreground/50"
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                            {input && (
                                <Button variant="ghost" size="icon" onClick={handleClear} className="text-muted-foreground hover:text-foreground">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>
            </div>

            {/* Stats / Info - MinimalistDivider */}
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest pl-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{fontStyles.length} Styles Generated</span>
            </div>

            {/* Output Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {fontStyles.map((style) => {
                    const transformedText = getTransformedText(input, style.id);
                    const actualCopyText = transform(input || "Fancy Text", style.id);
                    return (
                        <Card
                            key={style.id}
                            className="group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary/20 bg-card/50 hover:bg-card"
                        >
                            <div
                                onClick={() => handleCopy(actualCopyText)}
                                className="p-5 flex flex-col gap-3 cursor-pointer"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-bold tracking-widest text-muted-foreground/70 uppercase group-hover:text-primary/70 transition-colors">
                                        {style.name}
                                    </span>
                                    <Type className="w-3 h-3 text-muted-foreground/20 group-hover:text-primary/20" />
                                </div>

                                <p
                                    className="text-lg md:text-xl font-medium break-words text-foreground/90"
                                    style={{
                                        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                                        unicodeBidi: 'normal',
                                        whiteSpace: 'normal',
                                        textDecoration: getTextDecoration(style.id)
                                    }}
                                >
                                    {transformedText}
                                </p>

                                {/* Hover Action */}
                                <div className="hidden md:block md:absolute md:top-4 md:right-4 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200">
                                    <Button size="sm" variant="secondary" className="shadow-sm gap-2 h-8 text-xs font-medium">
                                        <Copy className="w-3.5 h-3.5" />
                                        Copy
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
