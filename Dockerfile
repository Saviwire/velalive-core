# ... previous lines ...
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Add this line to copy your custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
