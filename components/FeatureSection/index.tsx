import React from 'react';
type Feature = {
  title: string;
  description: string;
  iconColor: string;
  iconPath: string;
};

type FeatureSectionProps = {
  title: string;
  description: string;
  features: Feature[];
  imageUrl: string;
};

const FeatureSection = ({ title, description, features, imageUrl }: FeatureSectionProps) => {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-green-600">{title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{description}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
                Pretegeo é o app que mantém você informado e seguro em momentos críticos. Saiba mais sobre como
                nos preparamos para alertar sobre desastres naturais como enchentes, alagamentos e incêndios.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-100 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={index} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-gray-300">
                      <svg
                        className={`absolute left-1 top-1 h-5 w-5 text-${feature.iconColor}-600`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d={feature.iconPath} clipRule="evenodd" />
                      </svg>
                    {feature.title}
                    </dt>
                    {' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={imageUrl}
            alt="Pretegeo app screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
