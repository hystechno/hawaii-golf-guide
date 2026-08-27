interface AffiliateDisclosureProps {
  inline?: boolean;
}

export function AffiliateDisclosure({ inline = false }: AffiliateDisclosureProps) {
  if (inline) {
    return (
      <p className="text-xs text-gray-400 mb-3 italic">
        Hawaii Golf Guide is reader-supported. When you buy through links on our site,
        we may earn an affiliate commission at no extra cost to you.
      </p>
    );
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
      <p className="text-xs text-gray-500">
        Hawaii Golf Guide is reader-supported. When you buy through links on our site,
        we may earn an affiliate commission at no extra cost to you.
      </p>
    </div>
  );
}
